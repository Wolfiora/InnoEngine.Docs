---
uid: api.directory.engine.build.composition
title: "Composition"
kind: landing
owners: []
---

# Composition

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [BuildCompositionContext](buildcompositioncontext/index.md) | Captures host-owned SDK selection and application location without probing global process state. |
| [BuildDistribution](builddistribution/index.md) | Freezes platform factories, managed publishers, and matching Support Pack sources as one distribution. |
| [BuildPipelineFactory](buildpipelinefactory/index.md) | Creates common build pipelines from a single distribution and explicitly borrowed authoring owners. |
| [BuildPlatformContribution](buildplatformcontribution/index.md) | Binds one implemented target to its factory, Support Pack source and SDK provider as a single registration. |
| [BuildTargetFactory](buildtargetfactory/index.md) | Creates a platform packager without borrowing authoring or content compiler services. |
| [GameBuildContribution](gamebuildcontribution/index.md) | Registers a platform contribution with the content implementation selected by a distribution. |
| [GameContentCompilerFactory](gamecontentcompilerfactory/index.md) | Creates a content compiler borrowing the active authoring services for one pipeline. |
| [NativeProductContribution](nativeproductcontribution/index.md) | Binds a product&#39;s immutable graph to its platform-selected execution strategy. |
| [NativeToolchainContribution](nativetoolchaincontribution/index.md) | Registers an implemented native SDK capability without declaring a complete game product. |

