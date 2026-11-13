---
uid: api.30c61e74fb66bb0ca12298cc1e401583f5b4bbac79b9099639b9326fcff051e2
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.#ctor(Inno.Content.IRuntimeContentStore,Inno.Core.Serialization.SerializationGeneration,Inno.Extensibility.Types.TypeCacheSnapshot,Inno.Core.Identity.IdentityAllocator,System.Int64,System.Int64)"
source: xml
reviewed: 91ba76cb8a2b0c2295ad75e71fd343935802ceaf8a78f87031a5f986237b2e02
title: "Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Creates a read-only runtime asset database from one verified immutable content store.

**Parameter `content`:** The borrowed content store; its owner closes it after this database and all outstanding reads retire.

**Parameter `serialization`:** The immutable converter generation pinned by the owning runtime session.

**Parameter `identities`:** The session-owned allocator used for canonical runtime asset identities.

**Parameter `types`:** The immutable type generation pinned by this runtime session, without refreshing authoring registries.

**Parameter `residencyBudgetBytes`:** Maximum unpinned runtime payload bytes retained after lease release.

**Parameter `preparationBudgetBytes`:** Maximum encoded payload bytes reserved by unfinished cold-load closures, independently of residency.

**Exception `T:System.ArgumentNullException`:** Thrown when `serialization` is null.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the deployed catalog or its runtime artifact closure is incomplete or malformed.
