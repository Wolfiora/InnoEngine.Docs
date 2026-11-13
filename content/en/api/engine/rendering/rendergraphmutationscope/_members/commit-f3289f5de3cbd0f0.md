---
uid: api.f3289f5de3cbd0f0ec1765608b4e2c32bcf119e36660473dae38522969a28990
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderGraphMutationScope.Commit"
source: xml
reviewed: dea920a4e3559f75d19c86d802316a99dea2e9025c2478dd2f791643b6e4720e
title: "Commit"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Validates and freezes additions in the current scope. Dispose must still end the scope before new work.

**Exception `T:System.InvalidOperationException`:** The scope is not current, was already committed, or the graph additions are invalid.

**Exception `T:System.ObjectDisposedException`:** This scope has already ended.
