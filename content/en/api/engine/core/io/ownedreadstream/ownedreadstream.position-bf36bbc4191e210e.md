---
uid: api.bf36bbc4191e210e4d9963fb7133a4410f0382fbbc8ba4d97e181898c02c8932
symbol: "engine:Inno.Core.IO:P:Inno.Core.IO.OwnedReadStream.Position"
source: xml
reviewed: fe45fbdb489029613d865a55a75de59ad6e176b5a9c1ee2ec095843e1b87d8e1
title: "OwnedReadStream.Position"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

When overridden in a derived class, gets or sets the position within the current stream.

**Exception `T:System.IO.IOException`:** An I/O error occurs.

**Exception `T:System.NotSupportedException`:** The stream does not support seeking.

**Exception `T:System.ObjectDisposedException`:** Methods were called after the stream was closed.

**Returns:** The current position within the stream.
