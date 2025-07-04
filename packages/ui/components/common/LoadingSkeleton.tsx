
import { Skeleton } from 'primereact/skeleton';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="grid">
      <div className="col-12">
        {/* <div className="card p-fluid"> */}
        {/* <h5><Skeleton width="10rem" height="2rem" /></h5> */}
        {/* <div> */}
        <div className="p-datatable-gridlines p-datatable p-component p-datatable-responsive-scroll p-datatable-gridlines">
          <div className="p-datatable-header">
            <div className="p-toolbar p-component">
              <Skeleton width="16rem" height="3rem" />
              <Skeleton width="10rem" height="3rem" />
            </div>
          </div>
          <div className="p-datatable-wrapper loading-inside">
            <table className="p-datatable-table" role="table">
              <thead className="p-datatable-thead">
                <tr role="row">
                  <th style={{ width: 10 }}>
                    <Skeleton width="2rem" height="2rem"></Skeleton>
                  </th>
                  <th>
                    <Skeleton width="100%" height="2rem"></Skeleton>
                  </th>
                  <th>
                    <Skeleton width="100%" height="2rem"></Skeleton>
                  </th>
                  <th>
                    <Skeleton width="100%" height="2rem"></Skeleton>
                  </th>
                </tr>
              </thead>
              <tbody className="p-datatable-tbody loading-inside">
                <tr>
                  <td colSpan={4}>
                    <Skeleton width="100%" height="15rem"></Skeleton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-datatable-footer">
            <div className="p-paginator p-component p-paginator-bottom">
              <Skeleton
                height="2rem"
                width="20rem"
                borderRadius="16px"
                className="mr-2"
              />
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default LoadingSkeleton;