title: Block chain
date: 2015-10-11 12:47:52
---
{% blockquote Wikipedia  https://en.wikipedia.org/wiki/Block_chain_(database)  (Article)%}
A block chain or blockchain is a distributed database that maintains a continuously growing list of data records that are hardened against tampering and revision, even by operators of the data store's nodes.
{% endblockquote %}

Thogh this concept/technology started off as a boring prospect, I soon realized the potential. A de-centralized source of truth that anyone can access and no one can tamper - can be pretty useful.

The technology started off with [bitcoin](https://bitcoin.org/en/). A currency with no central authority. Anyone can have the database, but can read only things, they are meant to - thanks to encryption. A set of complex cryptograpic operations happen all along the network, and its foolproof. Watch [this video](https://www.youtube.com/watch?v=l9jOJk30eQs) if you are interested in knowing more.

There are a few challanges around the technology, which makes it even more interesting.

* Latency - Complex operations and replication throught network, it is bond to be slower.
* Size of database in each peer node. 

There are also some opertunities to improve. I have a few hypothetical ideas, I am playing with.

* Distrubuted partial database - Each peer stores partial data, but on the whole system has several copies of same data
* Context aware distrubuted database - Each peer knows its context in the whole distrubuted system, and can do operations quickly and smartly.
* Generic data platform - where owner of data has all the power, suppliers ask for the data but can never store.