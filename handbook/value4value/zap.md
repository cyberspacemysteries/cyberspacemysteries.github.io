---
layout: handbook
title: Zap
description:
nav_order: 1
has_children: false
parent: Value 4 Value
permalink: /handbook/value4value/zap/
redirect_from:
 - /nosy-nostrich-club/nosy-nostrich-club-1/index.html
main_classes: -no-top-padding
image: https://nostr-ings.com/assets/images/home/placeholder-preview.png

---

<!---

Editor's notes

Illustration sources:


--->

{% include picture.html
   image = "/assets/images/home/placeholder.png"
   retina = "/assets/images/home/placeholder@2x.png"
   mobile = "/assets/images/home/placeholder-mobile.png"
   mobileRetina = "/assets/images/home/placeholder-mobile@2x.png"
   alt-text = "image description"
   caption = "caption when needed"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Zap

The beginnings of a future page...

## A new bitcoin usecase is rising: zaps in nostr. A value4value culture is growing in parallel.

Nostr is a decentralized protocol in active development for various use cases, starting with social media. Within this unique [FOSS community](https://github.com/nostr-protocol/nostr), encompassing various development hubs, the zap was born.

A zap is a bitcoin micropayment using the lightning network.

Zaps are opening a door to a culture of value4value by giving access to people all over the world to permissionless payments for offering content+ to their niche audiences.

As nostr grows, so does the possibility of wider bitcoin adoption. Nostr contributes to bitcoin discoverability & supports value4value.

---

nostr active users: 480,282

btc zapped: 7.07800025

1 May 2023, [primal.net](https://primal.net)

---

## Challenges

### Scaling + UI/UX

The nostr protocol can be accessed through multiple nostr clients, many of which are in the process of implementing zaps. UI/UX varies and needs to address multiple issues on guiding people to receive and send zaps.

---

### Privacy & Security

A nostr economy using lightning payments can help prevent privacy invasive practices of data gathering for advertising.

Nostr is using the [NIP57 Lightning Zaps](https://github.com/nostr-protocol/nips/blob/master/57.md) implementation, which uses LNURL in order to let people receive zaps on profiles, individual notes (similar to posts or tweets) and other types of nostr clients uses like blogging, highlightning, or music.

Using custodial LNURL services has been helping people adopt bitcoin, yet it carries bitcoin privacy and custodial tradeoffs. The use of LNURL addresses has concentrated within a few bitcoin wallets supporting LNURL addresses. This creates a custodial single-point-of-failure posing a risk to the security of funds. Service outages have also been reported during peak times or zapathons (rallies to zap during a limited period of time).

Bolt12 has been explored as an alternative and hopes to replace the custodial use of LNURL, but its lack of widespread implementation has prevented its nostr implementation.

## Roadstr

### Explore UI/UX

* Zap to Payment user flows

* In-app education

* Nostr user research

* Browser extensions with dual purpose: nostr key keeping + LNURL address

### Explore ways of contributing to existing UI/UX efforts

* Individual nostr client GitHubs
* Adding content on value4value, nostr, and zaps to the Bitcoin Design Guide
* Contribute to the Bitcoin UI Kit with zap-to-payment user flows
* Nostr Design

### Explore ways of contributing to existing UI/UX efforts

#### Bolt 12

Encourage Bolt12 bitcoin wallet implementation

* Lift issues on individual bitcoin wallet's GitHubs
* Explore ways of contributing to already existing efforts encouraging Bolt12 implementation
    Bolt12.org
* Create explanation-page & keep track of Bolt12 implementation

#### Value 4 Value

Explore multiple ways nostr & lightning payments are opening paths for value4value

Explanation page/graphics

Explore ways of contributing to already existing efforts encouraging a value4value culture

    value4value.info
    bitcoin.design

### Nostrasia Unconference

Explore ways of adding UI/UX design topics related to a value4value culture to the agenda and a design "relay" (hub) to the Nostrasia Unconference

---


{% include next-previous.html
   previousUrl = "/value4value/"
   previousName = "Value 4 Value"
%}
