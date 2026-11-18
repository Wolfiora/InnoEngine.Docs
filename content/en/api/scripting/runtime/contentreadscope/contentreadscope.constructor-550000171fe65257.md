---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.550000171fe65257e8719722535bedee8871b32507ac85cb0bed36b933aadf5e
symbol: scripting:Inno.References:M:InnoEngine.References.ContentReadScope.#ctor(System.Collections.Generic.IEnumerable{InnoEngine.Core.Identity},System.Nullable{System.Guid})
title: ContentReadScope.Constructor
kind: api
owners:
- Inno.References
apiSurface: editor-script
sourceFingerprint: d9add44310528c688653943523a3d65db01634b5d07934293e84cbe0ae276b7b
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `contents`:** Registered identities in deterministic root order.

**Parameter `activeContent`:** The optional persistent identity of the primary root.

## Exceptions

**Exception `T:System.ArgumentException`:** A root is detached, duplicated, or the active root is not present.
