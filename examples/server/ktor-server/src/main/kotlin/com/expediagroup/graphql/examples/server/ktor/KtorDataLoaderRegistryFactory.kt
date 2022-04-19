/*
 * Copyright 2021 Expedia, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.expediagroup.graphql.examples.server.ktor

import com.expediagroup.graphql.examples.server.ktor.schema.dataloaders.BookDataLoader
import com.expediagroup.graphql.examples.server.ktor.schema.dataloaders.CourseDataLoader
import com.expediagroup.graphql.examples.server.ktor.schema.dataloaders.UniversityDataLoader
import com.expediagroup.graphql.dataloader.DataLoaderRegistryFactory
import org.dataloader.DataLoaderFactory
import org.dataloader.DataLoaderRegistry

/**
 * Example of how to register the various DataLoaders using [DataLoaderRegistryFactory]
 */
class KtorDataLoaderRegistryFactory : DataLoaderRegistryFactory {

    override fun generate(): DataLoaderRegistry {
        val registry = DataLoaderRegistry()
        registry.register(
            UniversityDataLoader.dataLoaderName,
            DataLoaderFactory.newDataLoader(
                UniversityDataLoader.getBatchLoader()
            )
        )
        registry.register(
            CourseDataLoader.dataLoaderName,
            DataLoaderFactory.newDataLoader(
                CourseDataLoader.getBatchLoader()
            )
        )
        registry.register(
            BookDataLoader.dataLoaderName,
            DataLoaderFactory.newDataLoader(
                BookDataLoader.getBatchLoader()
            )
        )
        return registry
    }
}