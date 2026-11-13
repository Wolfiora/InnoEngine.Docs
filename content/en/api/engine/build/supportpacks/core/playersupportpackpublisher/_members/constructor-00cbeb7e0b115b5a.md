---
uid: api.00cbeb7e0b115b5accff8c7b93a56b0428a281dcee3e2653d48db555d1830177
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPublisher.#ctor(System.Collections.Generic.IEnumerable{Inno.Build.SupportPacks.IPlayerSupportPackSource})"
source: xml
reviewed: deb306a6681844e783d5fb7cdf92ccb2a208d6f5641c21ebc9d25035102b7f5d
title: "Constructor"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Freezes the platform sources used by this publisher.

**Parameter `sources`:** Exactly one source for each supported target identity.

**Exception `T:System.ArgumentException`:** A source is null or a target is registered more than once.
