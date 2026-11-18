---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2bfab0fda9354a5a918274a5cde66987aade0aac15ec5ade618ab0db2ad08b74
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnerStamp.CaptureCurrent
title: ProcessOwnerStamp.CaptureCurrent
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: 0a4d5870ffac537b6b377e4be1a3587801889ae98e94f749f0def645a604f134
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

The current process identifier and UTC start timestamp.

## Exceptions

**Exception `T:System.ComponentModel.Win32Exception`:** The operating system cannot provide the current process start timestamp.

**Exception `T:System.PlatformNotSupportedException`:** The execution environment does not expose operating-system process lifetimes.
