---
title: Inno.Extensibility.Catalogs
description: Dependency-light discovery facts and static registration contracts owned by each contributing assembly.
uid: project.inno-extensibility-catalogs
kind: project
owners:
  - Inno.Extensibility.Catalogs
---
# Inno.Extensibility.Catalogs

This Foundation contract assembly defines explicit discovery metadata and registration for declarations and linked generic constructions. It has no engine-assembly dependency and does not load code, scan types, instantiate services or manage generation transactions.

Start with [contributing static type facts](../../extending/static-type-catalogs.md). Generated assembly catalogs use the same protocol as an explicit composition contributor.

## Composition and factory contract

Metadata defensively copies required collections but retains generation-owned Type and Attribute objects. Supply complete base/interface/attribute/override facts. These values are not persistent identities or mutable settings storage.

Contributions run synchronously on the composition thread. Do not retain the registrar after successful or failed composition. Duplicate declarations fail; repeated linked factories retain the first contribution. Closed factories are construction capabilities, not extra discoverable declarations.

Compile-time rejected generic argument sets are explicit negative facts. They differ from an unlinked valid construction, which is a deployment error. Positive/negative conflicts fail. The receiving catalog validates construction results and never introduces hidden dynamic reflection fallback.

Constructors run on demand. Factory results are owned by their requesting consumer, and factory exceptions propagate. The resulting generation owns its live declaration facts and factories; release them before collectible retirement.

## API reference

Browse the [exact type and member contracts](../types/extensibility-catalogs/index.md) in the selected CLR surface. Declaration coverage does not certify runtime or collectible-unload behavior.
