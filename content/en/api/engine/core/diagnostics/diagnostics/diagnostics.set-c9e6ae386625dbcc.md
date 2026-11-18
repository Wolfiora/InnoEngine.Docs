---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c9e6ae386625dbcc1504d7c52b39c5ca93733dafca5e9f65cf7fa6a4a25f9b06
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostics.Set(System.String,Inno.Core.Diagnostics.Diagnostic)
title: Diagnostics.Set
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
sourceFingerprint: 8428db98c868e4eeb4789e09419f780999209f88bdd9e30436fe2b91ae63354d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `group`:** The non-empty responsibility name scoped to the calling type.

**Parameter `diagnostic`:** The single current diagnostic. It replaces every previous entry in the group.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `group` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `diagnostic` is `null`.
