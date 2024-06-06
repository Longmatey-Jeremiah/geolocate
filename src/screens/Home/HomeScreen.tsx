import React, { useEffect, useState } from 'react';
import { Box, HStack, Text, VStack, Image, Icon, Spinner } from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { setEntrepriseId, setIsAuthenticated } from '../../store';
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { getCompanies } from '../../services';
import { EvilIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { HomeHeader } from './HomeHeader';
// import { RouteNames } from '../../constants';

interface Company {
  id: number;
  nom: string;
  logo: string;
  phone: string;
}

interface ApiResponse {
  _embedded: {
    entrepriseDTOModelList: Company[];
  };
}

function HomeScreen() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState<Company[]>([]);
  const data = useSelector((state) => state?.company.entreprise.id);
  const user = useSelector((state) => state?.auth.user);

  useEffect(() => {
    const fetchCompanies = async () => {
      setIsLoading(true);
      try {
        const response = await getCompanies();
        setCompanies(response._embedded.entrepriseDTOModelList);
        setIsLoading(false);
      } catch (error) {
        console.log('Error', error);
        setIsLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const viewLocation = async (entrepriseId: number) => {
    dispatch(setEntrepriseId(entrepriseId));
    console.log('Entreprise Id:', data);
    // navigation.navigate({ name: RouteNames.PROFILE });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader title="Home" user={user} />
      <DashboardLayout>
        {isLoading ? (
          <VStack h="100%" justifyContent="center" alignItems="center">
            <Spinner size={40} color="primary.200" />
          </VStack>
        ) : (
          <FlatList
            data={companies}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={<Text fontSize={26}>Companies</Text>}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => viewLocation(item.id)}>
                <Box borderBottomWidth="1" borderColor="coolGray.200" py="4">
                  <HStack space={3} justifyContent="space-between" alignItems="center">
                    {item.logo ? (
                      <>
                        <Image size="48px" source={{ uri: item.logo }} alt={`${item.nom} logo`} />
                        <VStack>
                          <Text>{item.nom}</Text>
                          <Text>{item.phone}</Text>
                        </VStack>
                      </>
                    ) : (
                      <>
                        <Text>{item.nom}</Text>
                        <Text>{item.phone}</Text>
                        <Icon as={EvilIcons} name="location" color="primary.200" size="26px" />
                      </>
                    )}
                  </HStack>
                </Box>
              </TouchableOpacity>
            )}
          />
        )}
      </DashboardLayout>
    </SafeAreaView>
  );
}

export { HomeScreen };
