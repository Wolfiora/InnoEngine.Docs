---
uid: api.d4d1c7a78aafaf485a713ca60ed20ac405c68d2be5a90c222731b06a357f9331
symbol: "engine:Inno.Platform:M:Inno.Platform.IPlatformApplication.GetWindows"
source: xml
reviewed: 240d04433a7ee739831ab0be3cd36db10e356ab64ee287cd467b5a865a1caf16
title: "GetWindows"
kind: api
owners: [Inno.Platform]
apiSurface: source-clr
---

Captures the currently valid windows owned or tracked by this platform session.

**Returns:** An immutable-by-convention snapshot of the current windows.

**Exception `T:System.ObjectDisposedException`:** Thrown when the platform application has already been disposed.
