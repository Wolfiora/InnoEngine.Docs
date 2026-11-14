---
uid: api.f788ed0e8cc144032a6743e561319ba5843fcb559f4b76b338a25d47e3fbb040
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.#ctor(Inno.Core.IO.IByteDocumentStore,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Settings.ProjectId,Inno.Core.Serialization.SerializationContext,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor})"
source: xml
reviewed: e7fce81cf0615bfe815e6c9613848dc9aef0b97f44026c4d9f8b0c4eb6004f44
title: "ProjectSettings.Constructor"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Loads one project settings document and builds the initial effective snapshot.

## Parameters

**Parameter `documentStore`:** The project document source; read-only deployments cannot persist project overrides.

**Parameter `types`:** The type catalog that owns project setting definitions and composers.

**Parameter `serialization`:** The serialization registry used for settings documents and contribution payloads.

**Parameter `defaultProjectId`:** The project namespace used when the document has no authored identity override.

**Parameter `contributors`:** Dependency-ordered default contributors.

**Parameter `serializationContext`:** The owner's complete reference resolver context, used for defaults, contributions and returned snapshots.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A required service or the owner's serialization context is null.
