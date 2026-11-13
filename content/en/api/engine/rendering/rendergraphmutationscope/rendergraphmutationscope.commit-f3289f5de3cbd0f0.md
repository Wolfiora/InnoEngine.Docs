---
uid: api.f3289f5de3cbd0f0ec1765608b4e2c32bcf119e36660473dae38522969a28990
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderGraphMutationScope.Commit"
source: xml
reviewed: 770c2420e7adf88d88711368d5b06956c66e2cd8fa5a483a6eb3812bff70056c
title: "RenderGraphMutationScope.Commit"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Validates and freezes additions in the current scope. Dispose must still end the scope before new work.

**Exception `T:System.InvalidOperationException`:** The scope is not current, was already committed, or the graph additions are invalid.

**Exception `T:System.ObjectDisposedException`:** This scope has already ended.
