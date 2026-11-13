---
uid: api.e06f7cbceb130d7417857bc09a4529c6041c8a3358b943f54491d4ec640dde14
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.OwnedReadStream.SetLength(System.Int64)"
source: xml
reviewed: 0a8748d18ca0e338f4d72b14600ef8872f8f35e4da5d9a1196f8ddb3d25b8dd4
title: "SetLength"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

When overridden in a derived class, sets the length of the current stream.

**Parameter `value`:** The desired length of the current stream in bytes.

**Exception `T:System.IO.IOException`:** An I/O error occurs.

**Exception `T:System.NotSupportedException`:** The stream does not support both writing and seeking, such as if the stream is constructed from a pipe or console output.

**Exception `T:System.ObjectDisposedException`:** Methods were called after the stream was closed.
