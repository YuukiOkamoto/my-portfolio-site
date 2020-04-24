---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
tags:
  - hoge
  - fuga
---

## RESTの問題点

- 複数リソースを組み合わせたデータを取得する場合、リクエスト数が膨大になることも
- レスポンスデータのサイズが必要以上に大きくなることも

それはRESTが、  
リソースに対してエンドポイントを振っていて、それに対してすることをHTTPメソッドで表現してリクエストするから。  
リソース単位であることと、サーバー側が何を返すかを決めていて、クライアント側はそこにリクエストを投げるという流れ。

## GraphQLの特徴

1. 必要なデータだけを取得可能
 こういう構造でこのデータをください」とリクエストすると、指示通りにレスポンスを返してくれる。
2. 1回のリクエストで複数リソースのデータを取得可能  
 エンドポイントは1つだけ。そこに投げるクエリが違う。
3. 型システムを持つ  

```jsx:title=hoge
const hoge = 'hoge';
alert(hoge);
```

This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg).

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

![Chinese Salty Egg](./salty_egg.jpg)
