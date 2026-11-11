---
title: "Rendering runtime publication tests"
description: "Verify complete frames, artifact scopes and generation-safe shader replacement."
uid: project.inno-rendering-runtime-tests
kind: project
owners:
  - Inno.Rendering.Runtime.Tests
---
# Rendering runtime publication tests

`Inno.Rendering.Runtime.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Content targets load deployed texture artifacts without authoring mounts, report unavailable artifacts and give independent slots distinct stable paths. The neutral rendering kernel assigns each content source once and does not declare concrete rendering worldviews or backend-specific shader protocols. Partial geometry allocation cannot replace a complete previous pair.

Contributors take effect on the next frame; failure does not publish resources, passes or persistent diagnostics. Completed or rejected frames release collectible snapshot scratch and graph callbacks. Unresolved model diagnostics remain until the cause resolves.

Unavailable primary output skips primary interaction and input scaling while keeping offscreen work. Restoring output publishes its real extent to the next complete frame. Invalid backend extent fails and closes the frame.

Explicit artifact scopes stay outside canonical material caches and release independently. An invalid draft keeps its own last-good program and consumer-specific diagnostics. Published content, rather than merely the latest asset definition/version, controls program selection. Every previously used pass must be created before any replacement becomes visible.

## Environment and execution

The project declares the `contract` layer. Use the actual runtime and reload fixture closure selected by the plan. Preserve generation and frame-retirement assertions; these protocol tests do not certify physical GPU numerical or pixel output.

Generate and inspect [one validation plan](../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Runtime.Tests/Inno.Rendering.Runtime.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Content Render Target Artifact Provider

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Runtime.Tests/ContentRenderTargetArtifactProviderTests.cs). Representative entry points:

- `TextureTargetArtifactLoadsWithoutAnyAuthoringSourceMount`
- `MissingDeployedTextureArtifactIsReportedAsUnavailable`
- `IndependentTextureSlotsUseStableDistinctDeploymentPaths`

### Empty Rendering Kernel

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Runtime.Tests/EmptyRenderingKernelTests.cs). Representative entry points:

- `OutputRouteAssignsEachWorldContentSourceOnlyOnce`
- `ProductionRenderingAssemblyDoesNotDeclareConcreteRenderingWorldviews`
- `OpenShaderProtocolsRemainBackendNeutral`
- `GeometryCandidatePublishesACompletePairAndPreservesOldPairAfterPartialAllocationFailure`

### Render Runtime Generation Tests.Contributors.cs

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Runtime.Tests/RenderRuntimeGenerationTests.Contributors.cs). Representative entry points:

- `CompletedOrRejectedFramesReleaseCollectibleSnapshotScratchAndGraphCallbacks`
- `ContributorRegistrationChangesTakeEffectOnTheNextFrame`
- `FailedContributorDoesNotPublishResourcesPassesOrPersistentDiagnostics`
- `UnresolvedModelDiagnosticRemainsUntilTheCauseIsResolved`

### Render Runtime Generation Tests.Presentation.cs

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Runtime.Tests/RenderRuntimeGenerationTests.Presentation.cs). Representative entry points:

- `UnavailablePrimaryOutputSkipsInputScalingAndKeepsOffscreenWork`
- `RestoringPrimaryOutputPublishesRealExtentToTheNextCompleteFrame`
- `InvalidBackendExtentFailsAndClosesTheDeviceFrame`
- `UnavailableLogicalInputSurfaceDoesNotDispatchPrimaryInteraction`

### Shader Program Publication

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Runtime.Tests/ShaderProgramPublicationTests.cs). Representative entry points:

- `ExplicitArtifactScopesDoNotPublishIntoCanonicalMaterialCachesAndReleaseIndependently`
- `InvalidDraftProgramKeepsOnlyItsOwnLastGoodAndReportsOnlyToItsConsumer`
- `ShaderProgramsFollowPublishedContentNotTheLatestAssetDefinitionOrItsVersion`
- `AllPreviouslyUsedPassesMustBeCreatedBeforeAnyReplacementIsPublished`

## Extend safely

Follow [suite maintenance](../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
