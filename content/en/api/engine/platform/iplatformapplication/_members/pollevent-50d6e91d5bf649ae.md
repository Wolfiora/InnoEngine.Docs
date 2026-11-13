---
uid: api.50d6e91d5bf649ae7f51c359a320339780cdf8dad2bfa74d7777e7b83ca8ab60
symbol: "engine:Inno.Platform:M:Inno.Platform.IPlatformApplication.PollEvent(Inno.Core.Events.Event@)"
source: xml
reviewed: 8865f22c07819e671ebb98c9b859c50499da67a8e9c6310f7dad01829861e181
title: "PollEvent"
kind: api
owners: [Inno.Platform]
apiSurface: source-clr
---

Attempts to dequeue the next backend-neutral platform event.

**Parameter `evnt`:** The translated event when one is available; otherwise, `null`.

**Returns:** `true` when an event was returned; otherwise, `false`.

**Exception `T:System.ObjectDisposedException`:** Thrown when the platform application has already been disposed.
