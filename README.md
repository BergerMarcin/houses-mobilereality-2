# houses-mobilereality

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

<br/><hr/>

# Copyrights of other parties
## Pictures
Pictures taken from: <br/>
 - https://picsum.photos/
 - https://i.picsum.photos/tileId/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY
 - https://i.picsum.photos/tileId/147/100/100.jpg?hmac=ZKzrDm4MliOp9keOjaqpf9qNdBrrTTu-_C5mfgA6uMk
 - https://i.picsum.photos/tileId/485/100/100.jpg?hmac=ybyMzdLx5nwRmJ8nGEHmLCRShOQiCR614gMH7Nm9y1c
 - https://i.picsum.photos/tileId/328/100/100.jpg?hmac=P5_NrWitwAoKkJWb8RJbWH2Gznx3jUIcVcLkZgS12Qs
 - https://i.picsum.photos/id/388/100/100.jpg?hmac=3-5-nz-Kq02kWaGIao86f6BScY0d2KkFAJ-2a-2U9c4
 

## Check if content overflows
Based on: https://stackoverflow.com/questions/143815/determine-if-an-html-elements-content-overflows

<br/><hr/><hr/><hr/>

# TASKS
[See tasks here](./Task_requirements.md)

<br/><hr/>

# Tasks time
1. Styling part - start view (1. view): 3 (regular time) + 1 + 0.75 + 1 + 2 + 6 = 13.75 (included 2h on debugging rendering in Chrome)
2. Logical part (views with API) 18h (included 4h of writting, testing and improving general API action for Vuex):
   - a. List of houses view (2. view): 3 + 3 = 6h 
   - b. Single house details view (3. view): 1 + 1 + 1= 2h
   - c. Delete house functionality (to the 2. & 3. view): 1 + 1 + 3 = 5h
   - d. Add house view (4. view): 1 + 2 + 2 = 5h

TOTAL: 31.75h <br/> 
Regular time: 3h

<br/><hr/>

# Developing issues
## Setting tile (rectangle) size
There are big and small rectangles/tiles which suit each other in order to touch each other without empty lines/spaces.

Size of the big tiles should be even value to let dived it by 2 for integer size value of the small tiles and therefore to be pixel accurate.
Due to that I moved responsibility to JS (Vue)

Unfortunately I was using Chrome for tests. I was observing that some 1px distance between tiles horizontal or vertical was occuring.
I was trying to debug it or find at least rule in which situation to create conditions.

Finally, I noticed that at Firefox rendering in proper way. So issue must be related to the way of rendering and need more time to solve it.

BTW, I have also tried to move calculations of the tile sizes to CSS/styling but I failed

<br/><hr/>

## Scrolling content in case overflow
I observed that scrolling of tile's content does not show whole that content but cuts top of it. 
That was only happened when content was set in the middle of the tile with `justify-content: center;`

I understand/believe that due to using `flex-direction: column` to view content of each tile, axises are being changed from vertical to horizontal.

To solve the issue I decided to check with JS if tile content is overflowed. I use for that DOM elements parameters. 
In case content was overflowed I switched content styling from `justify-content: center;` to `justify-content: start;`

Besides to get DOM elements I add unique ids for each Tile component instance and its elements. 

BTW, once again Vue did the job with DOM operations (checking DOM params and manipulate VDOM of Vue is risky, but Vue is perfect & VDOM rules; I have never observed any Vue bug except mines :) - I created in Vue dynamic comics with quite complicated animations on element DOM)

## Creating too general API action
Preparing general API action method utilized quite a lot of hours but now I have quite nice, reused API action method for Vuex store
