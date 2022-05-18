from queue import PriorityQueue
import requests
import time
from datetime import datetime

account = "zjpVRVHMzg3qmHq5tHvxiUKVeiLJ9oHD4ia5obZf1c6"
#Random helpful debug "7BjLjdJEGLaLscYkpw57YKzYqRY1i3ypnfLK8R2bgDrC"

limit = 50
MOST_RECENT_TX = ""

if __debug__:
    print("HELLO PROGRAM START")
    print("SETUP")

d = {} #incomingtxID -> [status, incoming_tx, outgoing_tx]
q = PriorityQueue() #(time, incoming_txId)

#CHANGE TO READ INCOMING TX ID

#for all transactions
payload = {'account': account, 'limit': limit}
resp = requests.get('https://public-api.solscan.io/account/transactions', params=payload)
count = 0
if len(resp.json()) != 0:
    MOST_RECENT_TX = resp.json()[0]['txHash']
while len(resp.json()) != 0 and count < 1:
    for t in resp.json():
        if account in t['signer']:
            d[t['txHash']] = ["INCOMING_NOT_FOUND", "", t]
        else:
            if t['txHash'] in d:
                d[t['txHash']][0] = "DONE"
                d[t['txHash']][1] = t
            else:
                d[t['txHash']] = ["TO_DO", t, ""]
                q.put((datetime.now(), t['txHash'])) #GET FROM smart contract
    payload = {'account': account, 'beforeHash':  resp.json()[-1]['txHash'], 'limit': limit}
    resp = requests.get('https://public-api.solscan.io/account/transactions', params=payload)
    count += 1

if __debug__:
    print("\n BEFORE PQ \n")
    print(q)
    print("\n BEFORE dict \n")

    for k in d.keys():
        print(k, d[k])

if __debug__:
    print("\n RECURRING PART \n")
    #go through all tx until seen most recent 

while True:
    if __debug__:
        print("ADDING NEW TRANSACTIONS at ", datetime.now())
    PREV_MOST_RECENT_TX = MOST_RECENT_TX
    payload = {'account': account, 'limit': limit}
    resp = requests.get('https://public-api.solscan.io/account/transactions', params=payload)
    if len(resp.json()) != 0:
        MOST_RECENT_TX = resp.json()[0]['txHash']
    found_prev_most_recent_tx = False
    while len(resp.json()) != 0:
        for t in resp.json():
            if t['txHash'] == PREV_MOST_RECENT_TX:
                found_prev_most_recent_tx = True
                if __debug__:
                    print("FOUND MOST RECENT")
                break
            if account in t['signer']:
                if t['txHash'] in d:
                    if d[t['txHash']][0] == "TO_DO":
                        d[t['txHash']][0] = "DONE"
                        d[t['txHash']][2] = t
                else:
                    d[t['txHash']] = ["INCOMING_NOT_FOUND", "", t]
            else:
                if t['txHash'] in d:
                    d[t['txHash']][0] = "DONE"
                    d[t['txHash']][1] = t
                else:
                    d[t['txHash']] = ["TO_DO", t, ""]
                    q.put((datetime.now(), t['txHash'])) #GET FROM smart contract
        if found_prev_most_recent_tx:
            break
        payload = {'account': account, 'beforeHash':  resp.json()[-1]['txHash'], 'limit': limit}
        resp = requests.get('https://public-api.solscan.io/account/transactions', params=payload)
    
    # go through q:
    while q.qsize() != 0:
        time_to_deliver, tx = q.queue[0][0], q.queue[0][1]
        if __debug__:
            print(time_to_deliver)
            print(tx)
        if d[tx][0] != "TO_DO":
            q.get()
            continue
        if time_to_deliver < datetime.now():
            #EXECUTE
            #do a sol transfer of X amount to Y address as per sent contract
            if __debug__:
                print("EXECUTE HERE")
            break #ONLY HERE FOR TEST
            #mark as DONE
            #REMOVE
            #q.get()
    
    time.sleep(5)


#update at the end last seen to the

