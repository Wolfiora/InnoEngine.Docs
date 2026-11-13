---
uid: api.directory.engine.extensibility.types
title: "Types"
kind: landing
owners: []
---

# Types

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [ITypeCatalogSource](itypecatalogsource/index.md) | Provides type metadata for an explicit assembly in a candidate module generation. |
| [StableTypeIdAttribute](stabletypeidattribute/index.md) | Defines a stable identity for a type, used by persistence and hot-reload remapping. |
| [TypeCacheBuildException](typecachebuildexception/index.md) | Reports one or more failures encountered while building a type-cache snapshot. |
| [TypeCacheReloadContext](typecachereloadcontext/index.md) | Provides the previous and candidate type catalogs during an assembly reload transaction. |
| [TypeCacheSnapshot](typecachesnapshot/index.md) | Represents an immutable, internally consistent view of discoverable runtime types. |
| [TypeCatalog](typecatalog/index.md) | Owns the active type catalog and provides all type discovery and identity queries. |
| [TypeRef](typeref/index.md) | Identifies one logical runtime type without retaining its assembly or load context. |
| [TypeRegistry&lt;TSnapshot&gt;](typeregistry/index.md) | Builds immutable extension registries from versioned type-cache snapshots. |

