---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3f73cc5537eb334adf752ca41336fd98aa61fdf6d24a8370ed5300caf75142a9
symbol: engine:Inno.References:M:Inno.References.ContentReadScope.#ctor(System.Collections.Generic.IEnumerable{Inno.Core.Identity.Identity},System.Nullable{System.Guid})
title: ContentReadScope.Constructor
kind: api
owners:
- Inno.References
apiSurface: source-clr
sourceFingerprint: 9ec40634371bda9d5416fd484afc2fc2522238e1735086a855e096ea33907a80
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
