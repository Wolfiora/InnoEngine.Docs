---
uid: api.2bfab0fda9354a5a918274a5cde66987aade0aac15ec5ade618ab0db2ad08b74
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnerStamp.CaptureCurrent"
source: xml
reviewed: 8c2e23bf2c1fad4701b55c636cb136296e769fa929084a02969ae9f9811e436f
title: "CaptureCurrent"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Captures the current process lifetime and releases its temporary inspection handle.

**Returns:** The current process identifier and UTC start timestamp.

**Exception `T:System.ComponentModel.Win32Exception`:** The operating system cannot provide the current process start timestamp.

**Exception `T:System.PlatformNotSupportedException`:** The execution environment does not expose operating-system process lifetimes.
