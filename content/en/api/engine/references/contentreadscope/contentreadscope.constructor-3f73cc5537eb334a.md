---
uid: api.3f73cc5537eb334adf752ca41336fd98aa61fdf6d24a8370ed5300caf75142a9
symbol: "engine:Inno.References:M:Inno.References.ContentReadScope.#ctor(System.Collections.Generic.IEnumerable{Inno.Core.Identity.Identity},System.Nullable{System.Guid})"
source: xml
reviewed: 7db5142b76fe389d7ace91fd01fbe18ddaa891baf2bf922ad04d4200d0cf2e3e
title: "ContentReadScope.Constructor"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Captures immutable root identities without retaining their live objects or registry.

**Parameter `contents`:** Registered identities in deterministic root order.

**Parameter `activeContent`:** The optional persistent identity of the primary root.

**Exception `T:System.ArgumentException`:** A root is detached, duplicated, or the active root is not present.
