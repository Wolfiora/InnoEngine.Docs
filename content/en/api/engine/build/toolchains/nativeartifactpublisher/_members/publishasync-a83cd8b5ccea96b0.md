---
uid: api.a83cd8b5ccea96b0a7e974f443e3c6996a76e214057ed8360c0500177a659752
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeArtifactPublisher.PublishAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBuildRecipe,System.Func{Inno.Build.Toolchains.NativeBuildContext,System.String,System.Threading.CancellationToken,System.Threading.Tasks.Task},System.Threading.CancellationToken,System.Func{Inno.Build.Toolchains.NativeBuildContext,System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeArtifact}})"
source: xml
reviewed: fe93314f46b3e7aee7c6f07b9eaf3ef3453e01bee2ee71f6c7d0d7fade60956d
title: "PublishAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Reuses a validated product or builds an isolated candidate and publishes it after input stability checks.

**Parameter `context`:** Checkout and configuration selected by build composition.

**Parameter `recipe`:** The frozen component, target, input inventory and ordered compiler recipe.

**Parameter `build`:** Producer receiving an identity-scoped context, private output directory and cancellation token. It must await all work and validate required outputs before returning.

**Parameter `cancellationToken`:** Cancels ownership acquisition or candidate preparation before publication.

**Parameter `describeOutputs`:** The producer's exact role inventory, or null for generic support payloads.

**Returns:** A complete native product with an exact, read-only output closure.

**Exception `T:System.ArgumentException`:** A component or target identifier is not a single path segment.

**Exception `T:System.IO.IOException`:** An input, candidate or artifact cannot be read or published.

**Exception `T:System.InvalidOperationException`:** Inputs change during preparation or the producer returns no complete output.

**Exception `T:System.OperationCanceledException`:** Ownership acquisition or preparation is canceled; previous products remain installed.
