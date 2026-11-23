---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.30c61e74fb66bb0ca12298cc1e401583f5b4bbac79b9099639b9326fcff051e2
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.#ctor(Inno.Content.IRuntimeContentStore,Inno.Core.Serialization.SerializationGeneration,Inno.Extensibility.Types.TypeCacheSnapshot,Inno.Core.Identity.IdentityAllocator,System.Int64,System.Int64)
title: AssetDatabase.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: e4f57f5d99c2a64ea82c676922d63ee9bd9f1bae344f64ede7a87f2ccb6bd617
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `content`:** The borrowed content store; its owner closes it after this database and all outstanding reads retire.

**Parameter `serialization`:** The immutable converter generation pinned by the owning runtime session.

**Parameter `types`:** The immutable type generation pinned by this runtime session, without refreshing authoring registries.

**Parameter `identities`:** The session-owned allocator used for canonical runtime asset identities.

**Parameter `residencyBudgetBytes`:** Maximum unpinned runtime payload bytes retained after lease release.

**Parameter `preparationBudgetBytes`:** Maximum encoded payload bytes reserved by unfinished cold-load closures, independently of residency.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `serialization` is null.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the deployed catalog or its runtime artifact closure is incomplete or malformed.
