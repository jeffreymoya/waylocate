import { Searchbar } from 'react-native-paper'
import { View } from 'react-native'
import React, { useState } from 'react'

export function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = () => {
			// Add your location search logic here
			console.log(`Searching for: ${searchQuery}`)
		}

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Searchbar
                placeholder="Search for ' location"
          '     onChangeText={(query) => setSearchQuery(query)}
                value={searchQuery}
                onIconPress={handleSearch}
                iconColor="#007AFF"
  '       ' />
            <Button onPress={handleSearch}>Search</Button>
        </View>
    )
}