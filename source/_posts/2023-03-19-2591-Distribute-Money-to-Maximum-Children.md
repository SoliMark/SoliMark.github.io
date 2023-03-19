---
title: 2591. Distribute Money to Maximum Children
date: 2023-03-19 22:39:45
categories: 
    - LeetCode
tags:
    - Leetcode_Biweekly_Contest_100
    - LeetCode_Easy
---

### [2591. Distribute Money to Maximum Children](https://leetcode.com/problems/distribute-money-to-maximum-children/)
---
#### Description
* You are given an integer money denoting the amount of money (in dollars) that you have and another integer children denoting the number of children that you must distribute the money to.

* You have to distribute the money according to the following rules:
  * All money must be distributed.
  * Everyone must receive at least 1 dollar.
  * Nobody receives 4 dollars.

* Return the maximum number of children who may receive exactly 8 dollars if you distribute the money according to the aforementioned rules. If there is no way to distribute the money, return -1.

---
### 心得
* 覺得這題corner case 很多 需要好好思考  最後是用 simulate 
* 自己也錯了不少QQ
* ~~不宜參考~~

#### Code
```cpp=
class Solution {
public:
    int distMoney(int money, int children) {
        money = money - children;
        if(money < 0) return -1;
        vector<int> get (children,1);
        int res = 0;
        for(int i=0;i<get.size();++i){
            if(money - 7 >=0){
                money = money -7;
                get[i] = get[i] + 7;
                res ++;
            }else{
                get[i] = get[i] + money;
                money = 0;
                if(get[i] == 4 && i==get.size()-1){
                    res --;
                }
                break;
            }
        }
        if(money > 0) res --;
        return res < 0 ? 0 : res;
    }
};
```