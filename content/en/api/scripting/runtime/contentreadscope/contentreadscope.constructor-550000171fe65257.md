---
uid: api.550000171fe65257e8719722535bedee8871b32507ac85cb0bed36b933aadf5e
symbol: "scripting:Inno.References:M:InnoEngine.References.ContentReadScope.#ctor(System.Collections.Generic.IEnumerable{InnoEngine.Core.Identity},System.Nullable{System.Guid})"
source: xml
reviewed: 2bd6d64c0fe9a093222850db1bde0b2b6acc8937d8db7cdcfc4ea4ecc3297ddf
title: "ContentReadScope.Constructor"
kind: api
owners: [Inno.References]
apiSurface: editor-script
apiScope: Runtime
---

Captures immutable root identities without retaining their live objects or registry.

## Parameters

**Parameter `contents`:** Registered identities in deterministic root order.

**Parameter `activeContent`:** The optional persistent identity of the primary root.

## Exceptions

**Exception `T:System.ArgumentException`:** A root is detached, duplicated, or the active root is not present.
