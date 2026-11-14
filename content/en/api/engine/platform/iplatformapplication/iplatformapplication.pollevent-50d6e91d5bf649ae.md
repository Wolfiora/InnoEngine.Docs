---
uid: api.50d6e91d5bf649ae7f51c359a320339780cdf8dad2bfa74d7777e7b83ca8ab60
symbol: "engine:Inno.Platform:M:Inno.Platform.IPlatformApplication.PollEvent(Inno.Core.Events.Event@)"
source: xml
reviewed: ace148fd0913f6b8afb6225a9b565dc2956dcd1a18aaafba271e46f9be2871d1
title: "IPlatformApplication.PollEvent"
kind: api
owners: [Inno.Platform]
apiSurface: source-clr
---

Attempts to dequeue the next backend-neutral platform event.

## Parameters

**Parameter `evnt`:** The translated event when one is available; otherwise, `null`.

## Returns

`true` when an event was returned; otherwise, `false`.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when the platform application has already been disposed.
