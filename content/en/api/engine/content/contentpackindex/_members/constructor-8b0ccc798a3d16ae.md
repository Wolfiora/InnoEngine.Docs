---
uid: api.8b0ccc798a3d16aed9ffda48c889cdb6379feccdd947254385a50483dd7d5a63
symbol: "engine:Inno.Content:M:Inno.Content.ContentPackIndex.#ctor(System.Collections.Generic.IEnumerable{Inno.Content.ContentEntry})"
source: xml
reviewed: e481618a804eb764029298d66fe7b91c117bf8a2a3dfe357918ef05b6ae28af2
title: "Constructor"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Copies and sorts a complete payload inventory.

**Parameter `entries`:** Immutable payload descriptions; ownership of the input enumeration remains with the caller.

**Exception `T:System.ArgumentException`:** An entry is null, repeats a folded key, or uses the reserved index identity.
