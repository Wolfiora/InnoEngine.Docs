---
uid: api.d4d1c7a78aafaf485a713ca60ed20ac405c68d2be5a90c222731b06a357f9331
symbol: "engine:Inno.Platform:M:Inno.Platform.IPlatformApplication.GetWindows"
source: xml
reviewed: 48c700e65c1f76f202aa4707a7a6287b391d639add720cf4bc79c222d0840c12
title: "IPlatformApplication.GetWindows"
kind: api
owners: [Inno.Platform]
apiSurface: source-clr
---

Captures the currently valid windows owned or tracked by this platform session.

## Returns

An immutable-by-convention snapshot of the current windows.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when the platform application has already been disposed.
