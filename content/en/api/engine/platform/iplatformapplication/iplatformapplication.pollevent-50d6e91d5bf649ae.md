---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.50d6e91d5bf649ae7f51c359a320339780cdf8dad2bfa74d7777e7b83ca8ab60
symbol: engine:Inno.Platform:M:Inno.Platform.IPlatformApplication.PollEvent(Inno.Core.Events.Event@)
title: IPlatformApplication.PollEvent
kind: api
owners:
- Inno.Platform
apiSurface: source-clr
sourceFingerprint: 275ee31d298fdc7c66126f78b50d1ff0de537e1ac62a8f507ae8b8bd51184184
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `evnt`:** The translated event when one is available; otherwise, `null`.

## Returns

`true` when an event was returned; otherwise, `false`.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when the platform application has already been disposed.
