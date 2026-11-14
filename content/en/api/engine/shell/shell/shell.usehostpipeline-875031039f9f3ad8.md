---
uid: api.875031039f9f3ad8a9a698719611adb1787a21056b494d8c0e3bd8be163c8b32
symbol: "engine:Inno.Shell:M:Inno.Shell.Shell.UseHostPipeline(Inno.Runtime.RuntimeSubsystemPipeline)"
source: xml
reviewed: 462033b6c3582d9ffc210a075bfd5f9761b91f33b00c98c4fc840514512c25a7
title: "Shell.UseHostPipeline"
kind: api
owners: [Inno.Shell]
apiSurface: source-clr
---

Borrows the EngineHost-owned pipeline used for application-wide output and services.

**Parameter `pipeline`:** The started pipeline; its EngineHost remains responsible for retirement.

**Exception `T:System.InvalidOperationException`:** A host pipeline is already configured.
