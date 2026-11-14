---
uid: api.23d470bf09f336b44035a1e38290bff102c24fb20abde52546612e53336d22ae
symbol: "engine:Inno.Runtime:M:Inno.Runtime.EngineHost.CreateHostPipeline(System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.IRuntimeSubsystemFactory},System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeCapabilityId})"
source: xml
reviewed: 356887723513432b643a43e8f4ba3f6d4ccd8e067f855e63f26f26474b98d457
title: "EngineHost.CreateHostPipeline"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Creates host-owned subsystems that outlive individual Edit, Play or Player sessions.

**Parameter `factories`:** The complete host factory set; session-lifetime factories are rejected.

**Parameter `capabilities`:** Backend-neutral capabilities verified by the application's selected services.

**Returns:** A pipeline owned by this EngineHost and borrowed by the application's Shell.

**Exception `T:System.ObjectDisposedException`:** The engine host is disposed.
