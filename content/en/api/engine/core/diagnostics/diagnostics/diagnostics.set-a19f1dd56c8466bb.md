---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a19f1dd56c8466bb4cab5c760d96a44f4547cdc021dc0323351054f1d8d272c9
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostics.Set(System.Guid,System.String,Inno.Core.Diagnostics.Diagnostic,System.String)
title: Diagnostics.Set
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
sourceFingerprint: 7e44213c54be01f60528de725248576c790456e1771d39292f7363ef5953fb75
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetID`:** The stable identity of the asset, scene element, or other dynamic target.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type and target.

**Parameter `diagnostic`:** The single current diagnostic. It replaces every previous entry in the targeted group.

**Parameter `displayName`:** The optional target name presented by diagnostic consumers.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `targetID` is empty or `group` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `diagnostic` is `null`.
