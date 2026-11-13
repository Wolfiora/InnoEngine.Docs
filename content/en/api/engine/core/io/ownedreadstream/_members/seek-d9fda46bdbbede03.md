---
uid: api.d9fda46bdbbede0390ee50fec60d47f530ff955987e65d3386584a427bdc11bb
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.OwnedReadStream.Seek(System.Int64,System.IO.SeekOrigin)"
source: xml
reviewed: d127649d3a837c7aadd6b046b90eb8bae9fc13da25c5e5455632e7f300dd0c14
title: "Seek"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

When overridden in a derived class, sets the position within the current stream.

**Parameter `offset`:** A byte offset relative to the `origin` parameter.

**Parameter `origin`:** A value of type `T:System.IO.SeekOrigin` indicating the reference point used to obtain the new position.

**Exception `T:System.IO.IOException`:** An I/O error occurs.

**Exception `T:System.NotSupportedException`:** The stream does not support seeking, such as if the stream is constructed from a pipe or console output.

**Exception `T:System.ObjectDisposedException`:** Methods were called after the stream was closed.

**Returns:** The new position within the current stream.
