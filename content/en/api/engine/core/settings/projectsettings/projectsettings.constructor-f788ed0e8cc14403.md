---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f788ed0e8cc144032a6743e561319ba5843fcb559f4b76b338a25d47e3fbb040
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.#ctor(Inno.Core.IO.IByteDocumentStore,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Settings.ProjectId,Inno.Core.Serialization.SerializationContext,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor})
title: ProjectSettings.Constructor
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 1ab94a3b6f97c9e132a1cb2c6bcebff64eb59f5a95c43d5e7f6a38f3af23fc0d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `documentStore`:** The project document source; read-only deployments cannot persist project overrides.

**Parameter `types`:** The type catalog that owns project setting definitions and composers.

**Parameter `serialization`:** The serialization registry used for settings documents and contribution payloads.

**Parameter `defaultProjectId`:** The project namespace used when the document has no authored identity override.

**Parameter `contributors`:** Dependency-ordered default contributors.

**Parameter `serializationContext`:** The owner's complete reference resolver context, used for defaults, contributions and returned snapshots.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A required service or the owner's serialization context is null.
