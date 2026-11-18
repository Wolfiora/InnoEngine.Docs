---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1904525176a1a9648311112b5073c7fdca395d2cf5b951669b9306b4630efba9
symbol: engine:Inno.Platform:M:Inno.Platform.IPlatformApplication.CreateWindow(Inno.Platform.PlatformWindowOptions)
title: IPlatformApplication.CreateWindow
kind: api
owners:
- Inno.Platform
apiSurface: source-clr
sourceFingerprint: a64e4ad42da9a30e5550a0b4c55d28b49353d3700a946959e352b6f33f3e715e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `options`:** The validated initial window properties.

## Returns

The newly created window. The caller may dispose it before disposing the application.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when the platform application has already been disposed.
