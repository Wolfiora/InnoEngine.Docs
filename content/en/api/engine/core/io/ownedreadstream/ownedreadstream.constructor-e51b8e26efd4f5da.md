---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e51b8e26efd4f5daaf2380c2e3e8b8bcbd4d824952f4c7d6a33a573ea4f23546
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.OwnedReadStream.#ctor(System.IO.Stream,System.IDisposable)
title: OwnedReadStream.Constructor
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: 46a27fc62cb683170b98c22a199f037bcd37e2939986175689c767d6ecb73dfc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `input`:** The owned readable stream; it is closed before its pin is released.

**Parameter `owner`:** The owned pin whose repeated disposal must safely retry unfinished retirement.

## Exceptions

**Exception `T:System.ArgumentException`:** The stream is not readable.
