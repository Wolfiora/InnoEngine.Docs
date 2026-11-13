---
uid: api.875031039f9f3ad8a9a698719611adb1787a21056b494d8c0e3bd8be163c8b32
symbol: "engine:Inno.Shell:M:Inno.Shell.Shell.UseHostPipeline(Inno.Runtime.RuntimeSubsystemPipeline)"
source: xml
reviewed: b8771a1c766b795d3ae52377728e35836196279798aa6f8a22f72041bc282536
title: "UseHostPipeline"
kind: api
owners: [Inno.Shell]
apiSurface: source-clr
---

Borrows the EngineHost-owned pipeline used for application-wide output and services.

**Parameter `pipeline`:** The started pipeline; its EngineHost remains responsible for retirement.

**Exception `T:System.InvalidOperationException`:** A host pipeline is already configured.
