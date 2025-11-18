# Donate Link

A web standard for declaring donation links on websites using the HTML `<link>` element.

## Specification

Websites can declare a donation endpoint by adding the following to their HTML `<head>`:
```html
<link rel="donate" href="https://example.com/donate">
```

## Link Relation

- **Relation Name:** `donate`
- **Description:** Refers to a resource where monetary contributions can be made to support the context. The target resource may be a payment processor, crowdfunding platform, or any other mechanism that accepts financial support.

## Usage

The `donate` link relation allows websites to specify where visitors can make financial contributions. User agents, browser extensions, and other tools can discover this link to provide streamlined donation experiences.

### Examples

**Basic donation page:**
```html
<link rel="donate" href="https://example.com/donate">
```

**Third-party donation platform:**
```html
<link rel="donate" href="https://www.patreon.com/username">
```

**Direct payment link:**
```html
<link rel="donate" href="https://paypal.me/username">
```

## Implementation

A browser extension implementing this standard is available for [Firefox](https://addons.mozilla.org/addon/donate-link/) and Chrome. The extension displays a heart icon in the address bar when a `donate` link is detected, allowing users to quickly access the donation page.

[View Extension Source Code](https://github.com/webguyio/donate-link/blob/main/background.js)

## Registration Status

This link relation is proposed for registration with the [IANA Link Relations Registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml) via [protocol-registries/link-relations](https://github.com/protocol-registries/link-relations/issues/70).
