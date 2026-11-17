---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.50d6e91d5bf649ae7f51c359a320339780cdf8dad2bfa74d7777e7b83ca8ab60
symbol: engine:Inno.Platform:M:Inno.Platform.IPlatformApplication.PollEvent(Inno.Core.Events.Event@)
title: IPlatformApplication.PollEvent
kind: api
owners:
- Inno.Platform
apiSurface: source-clr
reviewed: 855627a0370781c895926af35c3f39c2a292447f5eb0cd25dad3445bb40d4a46
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
