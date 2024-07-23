---
draft: false
date: 2024-03-18 
tags:
  - terms
authors:
  - elidyweaver
categories:
  - terminology
---

# terminology

## the language of freedom tech

<!-- excerpt ends before this -->

<a id="client"></a>
## client

**Nostr is NOT just one app.**

A nostr client is an app or website created with <a href="https://nostr.com" target="new">nostr code</a> that finds and posts nostr content unto relay servers. Since it is open code, any developer can build their own version of a nostr client running on the nostr protocol. 



## keys

**Not your keys, not your social media.**

To join nostr, you don't need to give up your email or phone number. Instead, the first time you sign up to most nostr clients, you get a special set of keys. These are two long strings of numbers unique to you. You can use them to enter most of the nostr universe. They also keep your notes, follows, and followers.

They belong only to you. 

You get a public key and a secret key. 

## note

Instead of tweets or posts, nostr has notes. Feel free to write notes away. 

## npub or public key

Your public key takes the place of your handle. It is a number unique to you. However, you still get to have a handle, but it can be anything you want it to be, and you can change it anytime you want. You don't need to add any numbers or strange spellings, because what needs to be unique is your npub. 

nsec + LongStringOfNumbersUniqueToYou

Share your public key with your friends, so they can find you or mention you. You can copy it from your profile (often found by a key or QR code icon).

If you spot a QR icon in your nostr client, others can scan it and their nostr app should open to your profile page, as long as their app has that functionality. Some nostr clients let you share other people's npub QR's too.

## nsec a.k.a. secret or private key

You are the sole keeper of your secret key. You can use it to sign in to nostr clients, and to create notes.

Your nsec is a special kind of "password". You can use it to sign in to nostr clients, and to create notes.

nsec + LongStringOfNumbersUniqueToYou

It belongs only to you, not to a company. If you are used to the ways of platforms like Twitter and Facebook, you may think someone can help you recover it, but you won't find a "forgot your password?" option.

Nostr is different, you're the one in control. When someone owns your account, they know your password and can help you recover it. One of the tradeoffs is that they can also close down your account or limit it in some way. At nostr you own your keys and should keep your nsec safe.

TIP: Save your nsec in a password manager (for example Bitwarden).
Some nostr clients keep your secret key hidden in the Settings. Make sure you copy it and save it in your password manager before logging out.
In the future, we may see options to save an encrypted copy in the cloud, perhaps some options already exist.

If you are logging in through a website (not an app), save your nostr nsec in a special browser extension first. Browsers, by nature, are not as safe, your secret key could get stolen. You may see this option to log in labelled as "login with extension or NIP-07" 