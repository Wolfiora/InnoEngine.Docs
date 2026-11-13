---
title: About InnoEngine
description: Understand InnoEngine's modular design and how to use this documentation.
uid: about.introduction
kind: explanation
---
# About InnoEngine

InnoEngine is a modular engine with an Editor, runtime services, content workflows, and platform-specific products. Its shared layers define capabilities and ownership; explicit product composition selects implementations.

## Read by task, then by contract

Use **Getting Started** for a first Editor session, the **Manual** for an existing feature, and **Extending InnoEngine** when adding behavior. **Architecture** explains the model behind those workflows. **API Reference** provides exact declarations and calling contracts.

You do not need to memorize assembly names before using the Manual. Project names remain useful for finding source ownership and precise reference material.

## What the engine keeps separate

- A tool host is the environment in which build tools execute.
- A target identifies the intended platform, architecture, and ABI.
- A product selects an Editor or Player dependency closure.
- A backend implements a neutral capability.
- A session owns its runtime work and resources.

These distinctions allow a product to choose implementations without putting platform selection into shared services. See the [architecture overview](../architecture/overview.md).

## Current boundaries

The source includes Windows x64 and macOS ARM64 Editor products and a browser Player target. Their SDK, backend, deployment, and acceptance requirements differ. Source presence does not certify every device or graphics configuration.

InnoEngine's rendering core provides graphics mechanisms. It does not promise every higher-level rendering model or feature found in other engines. Features implemented by external consumer repositories are not automatically part of InnoEngine.

## Documentation and source

The [engine repository](https://github.com/Wolfiora/InnoEngine) owns implementation and XML contracts. The [documentation repository](https://github.com/Wolfiora/InnoEngine.Docs) owns this Manual and website. Documentation changes are paired with engine changes when behavior or API contracts change.
