# Virtual Machine Actions Proof of Concept

This app was developed using React Native coupled with Lottie. 
The application renders a 3 step onboarding and the animations associated with each step.

Users will be able to move from one screen to another and go back, affecting the animation.

## How to use

Either Clone or Fork this repository and run (in your terminal).

* How to edit
Access the script.js file and manipulate the array of objects followin the appended logic. 

* For nested Elements
```javascript
 { name:'Protection Security',
   sub:['Protect','Unprotect','Snapshot','Migrate','Add to Recovery Plan','Quarantine VMs','Unquarantine VMs','Configure VM Host-Affinity','Configure VM Anti Host-Affinity'],
   type: 'nested'
 }
```
 
 * For single Elements
 
 ```javascript
  { name: 'Protection Security',
    type: 'single'
  }
  ```
    
* Technologies using this
    - `HTML/CSS`
    - `JQUERY`
    
## Screenshots
<img src= 'https://github.com/john00123/ntnx-vm-actions/blob/master/screenshots/screen1.png?raw=true' width=800px/>

## Author
John Torres


Ⓒ Nutanix All rights reserved 2019


