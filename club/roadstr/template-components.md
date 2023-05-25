---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: club
permalink: /template-components/
title: Template Components
description: Copy + Paste these placeholder items unto pages you want to contribute to Nostr-ings
image: https://nostr-ings.com/assets/images/home/placeholder-preview.png
---
# Web Components
{:.no_toc}

This page has different components taken from different pages of the [Bitcoin Design Guide](https://github.com/BitcoinDesign/Guide) GitHub repository. You can copy and paste code blocks into pages you are putting together to contribute to Nostr-ings.

This page uses:

Placeholder images
Placeholder text from [nostr](https://github.com/nostr-protocol/nostr)

---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

<!--- buttons --->
## Buttons

Simple button

[Nostr-igns]({{ '/' | relative_url }}){: .button }

Download buttons

Filled version

[SVG]({{'/assets/images/location-of-file/name-of-file.svg' | relative_url }}){: .button download=""}

Outlined version

[PNG]({{'/assets/images/location-of-file/name-of-file.png' | relative_url }}){: .button.-outline download=""}

<!--- end buttons --->

---

<!--- citations --->
## Citations

<cite>By <a href="https://nostr-ings.com">Author</a></cite>

---

<!--- code --->
## Code

```markdown
**bold**
_italic_
~~strikethrough~~
```

<!--- columns --->
## Columns

---

### Blank

<!--- row with 2 columns--->
<div class="columns-desktop -two -ref">
<!--- blank column --->
<div class="column -blank" markdown="1">

</div>
<!--- end blank column --->
<!--- blank column --->
<div class="column -blank" markdown="1">

</div>
<!--- end blank column --->
</div>
<!--- end row --->

---

### Two Column Setup (image + text on each column)

<!--- row with 2 columns--->
<div class="columns-desktop -two -ref">

<!--- one column --->
<div class="column" markdown="1">

{% include image.html
   image = "/assets/images/home/placeholder-column.png"
   retina = "/assets/images/home/placeholder-column@2x.png"
   alt-text = "Placeholder image for two column setup"
  caption = "Caption when needed"
   width = 400
   height = 210
   link-url = "/link-url-when-needed/"
%}

<h2 class="h3" markdown="1">[Title with link]({{ '/section/sub-section/' | relative_url }})</h2>

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

</div>
<!--- end one column --->
<!--- one column --->
<div class="column" markdown="1">

{% include image.html
   image = "/assets/images/home/placeholder-column.png"
   retina = "/assets/images/home/placeholder-column@2x.png"
   alt-text = "Placeholder image for two column setup"
   caption = "Caption when needed"
   width = 400
   height = 210
   link-url = "/link-url-when-needed/"
%}

<h2 class="h3" markdown="1">[Title with link]({{ '/section/sub-section/' | relative_url }})</h2>

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

</div>
<!--- end one column --->
</div>
<!--- end row --->

---

### Two Column Setup (two separate unordered text lists)

---

<h2 class="h3" markdown="1">[How does Nostr work?]({{ '/section/sub-section/' | relative_url }})</h2>

There are two components: clients and relays. Each user runs a client. Anyone can run a relay.

<!--- row --->
<div class="columns-desktop -two -how">
<!--- column --->
<div class="column" markdown="1">

[Clients]({{ '/section/sub-section/' | relative_url }})<br />
[Relays]({{ '/section/sub-section/' | relative_url }})<br />
[Keys]({{ '/section/sub-section/' | relative_url }})<br />
[Identity]({{ '/section/sub-section/' | relative_url }})<br />
[Decentralization]({{ '/section/sub-section/' | relative_url }})

</div>
<!--- end column --->
<!--- column --->
<div class="column" markdown="1">

[Privacy]({{ '/section/sub-section/' | relative_url }})<br />
[Zaps]({{ '/section/sub-section/' | relative_url }})<br />
[NIPs]({{ '/section/sub-section/' | relative_url }})<br />
[Tools]({{ '/section/sub-section/' | relative_url }})<br />
[Censorship-resistance]({{ '/section/sub-section/' | relative_url }})

</div>
<!--- end column --->
</div>
<!--- end row --->
<!--- End columns --->

---

<!--- Description list --->
## Description List

{% include dl/open.html %}

{% include dl/item-open.html color="red" %}

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

{% include dl/item-middle.html color="red" %}

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

{% include dl/item-close.html %}

{% include dl/item-open.html color="orange" %}

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

{% include dl/item-middle.html color="orange" %}

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

{% include dl/item-close.html %}

{% include dl/item-open.html color="yellow" %}

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

{% include dl/item-middle.html color="yellow" %}

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

{% include dl/item-close.html %}

{% include dl/item-open.html color="green" %}

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

{% include dl/item-middle.html color="green" %}

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

{% include dl/item-close.html %}

{% include dl/item-open.html %}

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

{% include dl/item-middle.html %}

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

{% include dl/item-close.html %}

{% include dl/close.html %}

---

<!--- emoji boxes --->
## Emoji Boxes

Note the "first" and "last" labels

<div class="emoji-boxes">
{% include emoji-box.html
    emoji = "📅"
    title = "Title"
    description = "Description"
    first = true
    url = "https://nostr-ings.com"
%}

{% include emoji-box.html
    emoji = "📅"
    title = "Title"
    description = "Description"
    url = "https://nostr-ings.com"
%}

{% include emoji-box.html
    emoji = "📅"
    title = "Title"
    description = "Description"
    url = "https://nostr-ings.com"
%}

{% include emoji-box.html
    emoji = "📅"
    title = "Title"
    description = "Description"
    last = true
    url = "https://nostr-ings.com"
%}

</div>

---

<!--- Glossary --->
## Glossary

Within page

---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

Within page, specific links

---

<div class="glossary-toc" markdown="1">
- [Nostr Clients](#nostr-clients)
- [Relays](#relays)
- [Decentralization](#decentralization)
</div>

---

Entire page

{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

<!--- End glossary --->
---

<!--- Images --->
## Images

### Banner Image

Placeholder: 1600 x 600
Placeholder 2x: 3200 x 1200
Placeholder mobile: 400px square
Placeholder mobile 2x: 800px
Preview (social): 1200 x 630

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

### Wide Image Within Page

W: 800px
H: 400px
Mobile version

{% include picture.html
  image = "/assets/images/home/placeholder-800x400.png"
  retina = "/assets/images/home/placeholder-800x400@2x.png"
  mobile = "/assets/images/home/placeholder-mobile.png"
  mobileRetina = "/assets/images/home/placeholder-mobile@2x.png"
  alt-text = "image description"
  caption = "caption when needed"
  width = 800
  height = 400
%}

### Image Gallery

two images side-by-side

<div class="image-gallery">

{% include image.html
   image = "/assets/images//assets/images/home/placeholder-mobile.png"
   retina = "/assets/images//assets/images/home/placeholder-mobile@2x.png"
   alt-text = "image description"
   caption = '<a href="https://cutclout.com" target="_blank">Link Name</a> explanation'
   width = 400
   height = 480
   layout = "shadow"
%}

{% include image.html
   image = "/assets/images/guide/designing-products/common-user-flows/bitcoincore-com.jpg"
   retina = "/assets/images/guide/designing-products/common-user-flows/bitcoincore-com@2x.jpg"
   alt-text = "image description"
   caption = '<a href="https://cutclout.com/" target="_blank">Link name</a>'
   width = 400
   height = 480
   layout = "shadow"
%}

</div>

### Irregular image centered within content on a separate band

<div class="image-gallery" markdown="1">

{% include image.html
   image = "/assets/images/home/placeholder-irregular.png"
   retina = "/assets/images/home/placeholder-irregular@2x.png"
   alt-text = "image description"
   caption = "image caption (if needed)"
   width = 530
   height = 235
%}

</div>

### Left-aligned Small Square Image + Text

Image should have round corners (25)
Labelled "small"
100px (square)
Labelled "small@2x"
200px (square)

---

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/home/placeholder-small.png"
   retina = "/assets/images/home/placeholder-small@2x.png"
   alt-text = "placeholder image"
   caption = "caption when needed"
   width = 100
   height = 100
   layout = "float-left"
   link-url = "/guide/designing-products/introduction/"
%}

<h2 class="h3" markdown="1">[Title]({{ '/section/sub-section/' | relative_url }})</h2>

A closer look at the design process and frameworks, from [personal finance use cases]({{ '/guide/designing-products/personal-finance/' | relative_url }}) to [units & symbols]({{ '/guide/payments/units-and-symbols/' | relative_url }}), the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/' | relative_url }}), [user research]({{ '/guide/designing-products/user-research/' | relative_url }}), and more.

</div>

---

### Left-aligned Small Square Image + Title

<div class="center flex principle" markdown="1">

{% include image.html
image = "/assets/images/home/placeholder-small.png"
retina = "/assets/images/home/placeholder-small@2x.png"
alt-text = "image description"
width = 100
height = 100
layout="float-left"
%}

### Left-aligned Small Square Image + Paragraph

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/home/placeholder-small.png"
   retina = "/assets/images/home/placeholder-small.png@2x.png"
   alt-text = "image description"
   width = 100
   height = 100
   layout = "float-left"
%}

Everybody runs a client. It can be a native client, a web client, etc. To publish something, you write a post, sign it with your key and send it to multiple relays (servers hosted by someone else, or yourself). To get updates from other people, you ask multiple relays if they know anything about these other people. Anyone can run a relay. A relay is very simple and dumb. It does nothing besides accepting posts from some people and forwarding to others. Relays don't have to be trusted. Signatures are verified on the client side.
</div>

#### Notes and Other Stuff Transmitted by Relays

</div>

### Right-aligned

This setup works well with the mobile version size of banner images
400px (square)
800px (square)

---

#### Notes and Other Stuff Transmitted by Relays

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/home/placeholder-mobile.png"
   retina = "/assets/images/home/placeholder-mobile@2x.png"
   alt-text = "placeholder image"
   caption = "caption when needed"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Everybody runs a client. It can be a native client, a web client, etc. To publish something, you write a post, sign it with your key and send it to multiple relays (servers hosted by someone else, or yourself). To get updates from other people, you ask multiple relays if they know anything about these other people. Anyone can run a relay. A relay is very simple and dumb. It does nothing besides accepting posts from some people and forwarding to others. Relays don't have to be trusted. Signatures are verified on the client side.

</div>

---

### Row of Images

Add at the top of page for Modal:

image_base: /assets/images/image-location-without-its-file-name/
images_flow:
    - file: name-of-image
      modalImage: name-of-image-full
      alt: image description
      caption: image caption
    - file: name-of-image
      modalImage: name-of-image-full
      alt: image description
      caption: image caption
    - file: name-of-image
      modalImage: name-of-image-full
      alt: image description
      caption: image caption

Add on page:

{% include image-gallery.html pages = page.images_flow %}

---

### Right-aligned Vertical Image with Modal

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/home/place-holder-vertical.png"
   retina = "/assets/images/home/place-holder-vertical@2x.png"
   modalImage = "/assets/images/home/place-holder-vertical-full.png"
   width = 250
   height = 530
   alt-text = "image description"
   caption = "image caption"
   layout = "float-right-desktop -background -shadow"
%}

Everybody runs a client. It can be a native client, a web client, etc. To publish something, you write a post, sign it with your key and send it to multiple relays (servers hosted by someone else, or yourself). To get updates from other people, you ask multiple relays if they know anything about these other people. Anyone can run a relay. A relay is very simple and dumb. It does nothing besides accepting posts from some people and forwarding to others. Relays don't have to be trusted. Signatures are verified on the client side.

</div>

<!--- End Images --->

---

<!--- Lists --->
## Lists

- Clients
- Relays
- Tools

- [x] client
- [ ] relay

<!--- End lists --->
---

---

<!--- navigation arows --->
## Navigation Arrows

### next
---

{% include next-previous.html
   nextUrl = "/section/sub-section/"
   nextName = "Next Page Name"
%}

### previous and next

---

{% include next-previous.html
   previousUrl = "/section/sub-section/"
   previousName = "Previous Page"
   nextUrl = "/section/sub-section/"
   nextName = "Next Page"
%}

<!--- end navigation arrows --->

---

<!--- quotes --->
## Quote

> The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

<!--- end quotes --->

---

<!--- tables --->

## Tables


| Unit         | Symbol       | Bitcoin value     |
| ------------ | ------------ | ----------------- |
| bitcoin      | BTC or ₿     | 1                 |
| millibit     | mBTC         | 0.001             |
| bit          | μBTC         | 0.000 001         |
| satoshi      | sat          | 0.00 000 001      |
| millisatoshi | msat         | 0.00 000 000 001  |

<!--- End tables --->
---

## Tips: Dos, Don'ts, Info

### Dos

{% include tip/open.html color="green" icon="check" label="Do: Protocols" %}

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

It doesn't rely on any trusted central server, hence it is resilient; it is based on cryptographic keys and signatures, so it is tamperproof; it does not rely on P2P techniques, and therefore it works.

{% include tip/close.html %}

### Don'ts

{% include tip/open.html color="red" icon="forbid" label="Don’t: Platforms" %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% include tip/close.html %}

### Information

{% include /tip/open.html label="Information" icon="info" color="blue" %}

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

It doesn't rely on any trusted central server, hence it is resilient; it is based on cryptographic keys and signatures, so it is tamperproof; it does not rely on P2P techniques, and therefore it works.

{% include /tip/close.html %}



<!--- Videos --->
## Videos

Add at the top of the page:

video_base: /assets/images/location-of-image-to-present-video/
videos:
    - youtubeId: DvnAHp60zpU
      file: name-of-image-to-present-video
      caption: caption of video
    - youtubeId: dYur_tqjlMk
      file: name-of-image-to-present-video
      caption: caption of video

Add on page where videos are wanted:

---

{% include videos.html video_base = page.video_base videos = page.videos %}

<!--- end videos --->
---

## Join the conversation

---

Join the conversation in the [somewhere](https://URL) on somewhere.

<!--

Links to:
-

-->
