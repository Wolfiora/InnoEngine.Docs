---
uid: api.30c61e74fb66bb0ca12298cc1e401583f5b4bbac79b9099639b9326fcff051e2
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.#ctor(Inno.Content.IRuntimeContentStore,Inno.Core.Serialization.SerializationGeneration,Inno.Extensibility.Types.TypeCacheSnapshot,Inno.Core.Identity.IdentityAllocator,System.Int64,System.Int64)"
source: xml
reviewed: dc670ea68da08a38a0a7b53e1447edccd5e9e8f2152a94d5538b1c7f9dfce854
title: "AssetDatabase.Constructor"
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
