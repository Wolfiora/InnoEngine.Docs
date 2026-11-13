---
uid: api.00cbeb7e0b115b5accff8c7b93a56b0428a281dcee3e2653d48db555d1830177
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPublisher.#ctor(System.Collections.Generic.IEnumerable{Inno.Build.SupportPacks.IPlayerSupportPackSource})"
source: xml
reviewed: eb0cc2abb13c8ec2a539a39bee85fe97f79630f05056d744a9dc36f6a487c905
title: "Constructor"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Freezes the platform sources used by this publisher.

**Parameter `sources`:** Exactly one source for each supported target identity.

**Exception `T:System.ArgumentException`:** A source is null or a target is registered more than once.
