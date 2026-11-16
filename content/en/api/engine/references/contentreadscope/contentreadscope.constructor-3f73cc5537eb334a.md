---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3f73cc5537eb334adf752ca41336fd98aa61fdf6d24a8370ed5300caf75142a9
symbol: engine:Inno.References:M:Inno.References.ContentReadScope.#ctor(System.Collections.Generic.IEnumerable{Inno.Core.Identity.Identity},System.Nullable{System.Guid})
title: ContentReadScope.Constructor
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: e167cc2ee9aa417d1fcb305dece6ce68b0ec723fd3fec163fa9670e034e384c7
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
